import json
from math import nan
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

class Processor:
    def __init__(self,data_file='data.jsonl'):
        self.data_file = data_file
        self.model_checkpoint = 'cointegrated/rubert-base-cased-nli-threeway'
        self.tokenizer = AutoTokenizer.from_pretrained(self.model_checkpoint)
        self.model = AutoModelForSequenceClassification.from_pretrained(self.model_checkpoint)
        if torch.cuda.is_available():
            self.model.cuda()

    def process_sentences(self, input_text):
        sentences = []
        result = {}
        with open(self.data_file) as f:
             for i,line in enumerate(f):
                document = json.loads(line.rstrip('\n'))
                sentences.append(self.process_sentence(document["text"], input_text))
                if i%10==0:print("processed {}".format(i)) 
        answer, data = self.get_result(sentences)
        for sentence in data:
            for k, v in sentence.items():
                sentence[k] = str(v)
        result["answer"] =  answer 
        result["query"] = input_text
        result["data"] = data
        return result

    def process_sentence(self,text1="",text2=""):
        with torch.inference_mode():
            out = self.model(**self.tokenizer(text1, text2, return_tensors='pt').to(self.model.device))
            proba = torch.softmax(out.logits, -1).cpu().numpy()[0]
        result = ({v: proba[k] for k, v in self.model.config.id2label.items()})
        result["text"] = text1
        return result

    def get_result(self,results):
        evidence_sentences = []
        for result in results: 
            if result["entailment"] > 0.6: evidence_sentences.append(result)                          
        return (self.analyze(evidence_sentences),evidence_sentences)

    def analyze(self, results):
        count = len(results)
        print("count:{}".format(count))
        if count == 0: return "Ничего не известно"
        summ = 0
        for result in results:
            summ += result["contradiction"]
        print("summ:{}".format(summ))
        if summ/count < 0.5: result = "Возможно утвержение истинно"
        elif summ/count > 0.5: result = "Возможно утвержение ложно"
        else: result = "Равно вероятны истина и лоность данного высказывания"
        return result
         