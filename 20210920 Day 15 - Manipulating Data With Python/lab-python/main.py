import csv

file_open = open('CupcakeInvoices.csv')

for lines in file_open:
  print(lines)

file_open.close()

### Using delimiter ###

with open('CupcakeInvoices.csv', 'r') as csv_file:
  csv_reader = csv.reader(csv_file)

  print(csv_file)

  for line in csv_reader:
    print(line[2])

csv_file.close()

### Selecting invoice amounts

with open('CupcakeInvoices.csv', 'r') as csv_file:
  csv_reader = csv.reader(csv_file)

  print(csv_file)

  for line in csv_reader:
    print(line[4])
    float_num = float(line[4])
    # print(type(float_num))

csv_file.close()

### Sum invoice total

with open('CupcakeInvoices.csv', 'r') as csv_file:
  csv_reader = csv.reader(csv_file)

  sum_float = 0

  for line in csv_reader:

        float_num = float(line[4])

        sum_float += float_num
        print(sum_float)
csv_file.close()



