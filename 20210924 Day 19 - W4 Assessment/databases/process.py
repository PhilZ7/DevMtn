log_file = open("um-server-01.txt") #opens txt file and calls it under the name 'log_file


def sales_reports(log_file): #creates a function called 'sales_reports'
    for line in log_file: #loops over each line in the log_file
        line = line.rstrip() #strip method to remove space in the beginning/end
        day = line[0:3] #specifies the number of letters contained within 'day'
        if day == "Mon": #if it matches "Tue", now "Mon"
            print(line) #prints/returns the matching criteria on the terminal


sales_reports(log_file) #runs the function

# def lots_melons(log_file):
#     for line in log_file: 
#         line = line.rstrip() 
#         melon = int(line[16:23]) 
#         if melon > 10:
#             print(line)

# lots_melons(log_file)
