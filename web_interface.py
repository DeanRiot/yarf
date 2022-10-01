import json
from flask import request, Flask, jsonify, send_from_directory
from flask_cors import CORS

class Interface:
    def __init__(self,nli_processor,port=8080):
        self.nli = nli_processor
        self.app = Flask(__name__)
        CORS(self.app)
        self.build_endpoints()
        self.app.run(host='0.0.0.0', port=port)
        

    def build_endpoints(self):
        @self.app.route('/')
        def root():
            return self.app.send_static_file('index.html')
        @self.app.route('/search', methods=['POST', 'GET'])
        def search_endpoint():
            query = request.args.get('query').lower()
            results = json.dumps(self.search(query), indent=4, ensure_ascii=False)
            return results
        @self.app.route('/<path:path>')
        def front(path):
            return self.app.send_static_file(path)
        

    def search(self, query):
        print('Processing query: {}'.format(query))
        return self.nli.process_sentences(query)