from flask import Flask, jsonify, request,redirect,url_for
import json

app = Flask(__name__)
created_object=[]

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', 'http://172.28.16.1:3000')  # 모든 도메인에서의 요청을 허용
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    response.status_code = 200
    return response

# CORS 관련 에러 핸들링
@app.errorhandler(404)
def not_found(error):
    return jsonify({'error': 'Not found'}), 404

@app.route("/flask/",methods=['GET'])
def hello():
    data = []
    data_dict ={}
    data_dict["id"] = 1
    data_dict["content"] ="hello"
    data_dict["title"] ="world"
    data.append(data_dict)
    return jsonify(data)

@app.route('/flask/create/', methods=['POST'])
def create_object():
    try:
        data = request.get_json()  # 클라이언트로부터 JSON 데이터 수신
        # 데이터를 처리하고 저장 (예: 데이터베이스에 저장)
        created_object.append(data)

        # 데이터를 처리한 후 /api/create/1로 리디렉션
        return redirect(url_for('view_object', object_id=1))
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route('/flask/create/<int:object_id>', methods=['GET'])
def view_object(object_id):
    # object_id에 해당하는 데이터를 조회하고 렌더링
    if object_id <= len(created_object):
        data = created_object[object_id - 1]
        return jsonify(data)
    else:
        return jsonify({"error": "Object not found"})

if __name__ == "__main__":
    app.run(host='0.0.0.0')
