# with built in libraries
opened_file = open('cars.csv')
from csv import reader

read_file = reader(opened_file)
apps_data = list(read_file)

rowcount = len(apps_data) #which incudes header row

print("Total rows incuding header: " + str(rowcount))

from collections import Counter

opened_file = Counter.