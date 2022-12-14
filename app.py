from flask import Flask, render_template
import script
app = Flask(__name__)

@app.route('/')
def index():
    script.download_csv('population.csv')
    script.select_country('Australia') 
    return render_template('index.html')

@app.route('/result')
def cool_form():
    return render_template('Australia_index.html')