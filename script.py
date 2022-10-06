import boto3
import csv
#from pyrsistent import T
from tabulate import tabulate
import shutil


def download_csv (file_name):
  
    #BUCKET_NAME='test-bucket-popilation'
    #OBJECT_NAME='population.csv'
    #FILE_NAME=file_name
#
    #session = boto3.Session(
#
    #)
#
    #s3 = session.resource('s3')
#
    #s3.Bucket(BUCKET_NAME).download_file(OBJECT_NAME, FILE_NAME)
#
    #print('success')
    import requests
    url = 'https://test-bucket-popilation.s3.eu-central-1.amazonaws.com/population.csv'
    headers = {'Host': 'test-bucket-popilation.s3.eu-central-1.amazonaws.com/'}
    r = requests.get(url, stream=True)
    print(r)
    with open(file_name, 'wb') as out_file:
        shutil.copyfileobj(r.raw, out_file)

print('The file was saved successfully')

download_csv('population.csv')


def select_country(county_name):
    with open('population.csv', 'r') as file:
        csvreader = csv.reader(file)
        header = next(csvreader)
        rows = []
        for row in csvreader:
            if row[0] == county_name:
                rows.append(row)
    print(header)
    #print(rows)
    table = (tabulate(rows, tablefmt='html'))

    file_name=county_name +  "_index.html"   
    print('we are here')
    python_file = open(file_name, "w")
    
    python_file.write(table)
    print(table)
    python_file.close()

select_country('Australia')     

