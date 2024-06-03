from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from PIL import Image
import numpy as np
from keras.models import load_model
from keras.preprocessing import image
from keras.applications.mobilenet_v2 import preprocess_input


model1 = load_model("C:/Users/ACER/Desktop/Final_project/Backend/config/image_classification_app/models/model1.h5")
model2 = load_model("C:/Users/ACER/Desktop/Final_project/Backend/config/image_classification_app/models/model2.h5")
# Assuming model3.h5 is the name of another model
# model3 = load_model("C:/Users/Lenovo/Desktop/Project/vggmodel.h5")

# Resize image to match model input size


def resize_image(img):
    return img.resize((224, 224))


# Function to make predictions using each individual model on a single image


def predict_individual_models(models, img):
    img = resize_image(img)
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)  # Preprocess input for MobileNetV2
    predictions = []
    for model in models:
        pred = model.predict(img_array)
        predictions.append(pred)
    return np.array(predictions)

# Ensemble prediction function using simple averaging


def ensemble_predict(models, img):
    predictions = predict_individual_models(models, img)
    ensemble_pred = np.mean(predictions, axis=0)
    return ensemble_pred

# Function to get final prediction, accuracy, and precision


def get_final_prediction(models, img):
    ensemble_predictions = ensemble_predict(models, img)
    predicted_class_index = np.argmax(ensemble_predictions)
    predicted_class_accuracy = ensemble_predictions[0][predicted_class_index]
    return predicted_class_index, predicted_class_accuracy


# Define class names
class_names = ["Cataract", "Diabetic Retinopathy", "Glaucoma", "Normal"]


@api_view(['POST'])
def classify_image(request):
    
    index1 = 20
    Accu = 0
    if 'image' in request.FILES:
        img = request.FILES['image']
        image1 = Image.open(img)

        predicted_class_index, predicted_class_accuracy = get_final_prediction(
         [model1, model2], image1)
        index1 = predicted_class_index
        predicted_class_accuracy = predicted_class_accuracy *100
        Accu = predicted_class_accuracy
        
    
    
   


    return Response({'classification_result': class_names[index1] ,
                     'index' : index1,
                     'Accuracy' :Accu }, status=200)
