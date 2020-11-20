import threading
import datetime
import random
import sys

sys.path.insert(0, '../gateway')
import control_center

def nodeOperation(func, timeInMinute):
  e = threading.Event()
  while not e.wait(timeInMinute * 60):
    dataFuncReturn = func()
    control_center.updateDataInJsonFile(dataFuncReturn)

def sensorMeasure():
  data = {
    'date': datetime.datetime.now().strftime('%m/%d/%Y-%H:%M'), 
    'humidity': random.randint(0, 100), 
    'temperature': random.randint(0, 100)
  }
  print('[SENSOR NODE] Capturando dados...', data)
  return data


#! teste: gerando dados de 2 em 2 min
nodeOperation(sensorMeasure, 2)
