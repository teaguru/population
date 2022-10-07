import json
import urllib3
import logging
import boto3
from botocore.exceptions import ClientError
import os


def lambda_handler(event, context):

    url = 'https://pkgstore.datahub.io/core/population-city/unsd-citypopulation-year-fm_csv/data/8b8d4d72dbf1a503bc3e241b394ce301/unsd-citypopulation-year-fm_csv.csv'
    import urllib3
    http = urllib3.PoolManager()
    r = http.request('GET', url, preload_content=False)

    with open('/tmp/population.csv', 'wb') as out:
        while True:
            data = r.read(4000)
            if not data:
                break
            out.write(data)
    print('data downloaded')

    r.release_conn()
    

    def upload_file(file_name, bucket, object_name=None):
        """Upload a file to an S3 bucket

        :param file_name: File to upload
        :param bucket: Bucket to upload to
        :param object_name: S3 object name. If not specified then file_name is used
        :return: True if file was uploaded, else False
        """

        # If S3 object_name was not specified, use file_name
        if object_name is None:
            object_name = os.path.basename(file_name)

        # Upload the file
        s3_client = boto3.client('s3')
        sts = boto3.client('sts')
        print(sts.get_caller_identity())
        try:
            response = s3_client.upload_file(file_name, bucket, object_name)
            print('ok')
        except ClientError as e:
            logging.error(e)
            return False
        return True


    upload_file('/tmp/population.csv', 'test-bucket-popilation' , 'population.csv' )    


