import argparse
from  processor import Processor
from web_interface import Interface

if __name__ == "__main__":
     parser = argparse.ArgumentParser(description='nli_processor')
     parser.add_argument('--port',
                        default=1234,
                        help='port to serve the flask API, default: 8080')
     parser.add_argument('--index_file',
                        default='models/weights',
                        help='the path to the model weights, default: models/weights')
     args = parser.parse_args()
     p =  Processor() 
     web = Interface(p, port=args.port)