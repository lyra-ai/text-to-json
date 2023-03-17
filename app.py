from flask import Flask, render_template, request, jsonify
import json
import pyperclip

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/convert', methods=['POST'])
def convert():
    input_text = request.form['input_text']
    json_output = json.dumps(input_text.replace('\n', ' '), ensure_ascii=False)
    pyperclip.copy(json_output)
    return jsonify({'json_output': json_output})

if __name__ == '__main__':
    app.run(debug=True)
