import threading
import datetime
import random
import string
from time import sleep
import requests 

minHumidity = 0
maxHumidity = 300

minTemperature = 5
maxTemperature = 55


def sensor_measure():
  data = {
    'humidity': random.randint(minHumidity, maxHumidity),
    'temperature': random.randint(minTemperature, maxTemperature)
  }
  print('[SENSOR NODE] Capturando dados...', data)
  return data

def gateway_data_processing(data):
  data['id'] = ''.join(random.choices(string.ascii_uppercase + string.digits, k=24))
  data['date'] = datetime.datetime.now().strftime('%m/%d/%Y-%H:%M')
  data['humidity'] = (data['humidity'] - minHumidity) / (maxHumidity - minHumidity)
  print('[GATEWAY] Tratando os dados medidos pelo sensor...')
  sleep(3)
  gateway_server_communication(data)

def gateway_server_communication(data):
  print('[GATEWAY] Transmitindo dados para o servidor back-end...')
  sleep(3)
  response = requests.post(url = "http://localhost:3333/data", data = data) 
  if(response.text):
    print('[GATEWAY] Transmissão realizada com sucesso.')

def hardware_operation(func, timeInMinute):
  e = threading.Event()
  while not e.wait(timeInMinute * 60):
    dataFuncReturn = func()
    gateway_data_processing(dataFuncReturn)


hardware_operation(sensor_measure, 1/4)
