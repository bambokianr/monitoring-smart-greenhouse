import json

file = '../database/data_greenhouse.json'

def savedDataInJsonFile():
  with open(file, 'r') as json_file:
    return json.load(json_file)

def writeInJsonFile(data):
  with open(file, 'w') as json_file:
    json.dump(data, json_file, indent = 2)

def updateDataInJsonFile(new_data):
  old_data = savedDataInJsonFile()
  data_to_save = old_data['data'] + [new_data]
  writeInJsonFile({ 'data': data_to_save })
