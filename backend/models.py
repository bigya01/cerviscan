import numpy as np
import cv2
import pickle
from sklearn.preprocessing import LabelEncoder
# import tensorflow
# from tensorflow import keras
# from keras import layers, models, optimizers, losses, metrics
# from keras import load_model
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

print(classify("save.jpeg"))





