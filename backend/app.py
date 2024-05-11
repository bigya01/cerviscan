from fastapi import FastAPI
from fastapi import UploadFile,HTTPException
# from models import classify
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import cv2
import pickle
from sklearn.preprocessing import LabelEncoder
from keras.models import load_model



def classify(path):
    img=cv2.imread(path)
    resized_img = cv2.resize(img,(180,180))
    features=np.array(resized_img)
    model =None
    # with open("trainedmodels.h5","rb") as f:
        # model=pickle.load(f)
    model=load_model("newmodel.h5")
    result=model.predict(features.reshape(1,180,180,3))
    # le = LabelEncoder().fit(['Type 1','Type 2','Type 3'])
    # result=le.inverse_transform(result)
    return np.argmax(result[0])




app=FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your list of allowed origins
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)


# @app.get('/api/')
# def get_hello_world():
#     return {'hello':'world'}
# @app.get('/api/hello/')
# def get_name(name:str):
#     return {'name': name}

@app.get('/api/classify')
def get_classification():
    return {'result': "Just a get response."}

@app.post('/api/classify')
async def classify_image(image: UploadFile):
    if not image.content_type.startswith('image/'):
        raise HTTPException(status_code=400, detail="not an image")
    else:
        # image_data = image.read()
        with open("save.jpeg","wb") as image_file:
            image_file.write(await image.read())
        res= classify("save.jpeg")
        return {'result': f"type {res+1}","status": 'success'}



