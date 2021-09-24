
### MORNING INTERACTIVE

# variable
first_name = 'Phil'
last_name = 'Meca'

age = 30

print(first_name)

# print two string variables 
print(first_name + ' ' + last_name)

print(age)

# print data type
print('my age is ' + str(age))

# print data type for variable along with variable
print(type(first_name), first_name)

# template literal concatenation "f"
print(f'My name is {first_name} {last_name}')

# lists
my_list = ['scissors', 'toothpick', 'knife']
print(my_list[1])

my_list[0] = 'table'

print(f'My favorite item is {my_list[0]}')

# tuple
my_tuple = ('book', 'car', 'hat', 'computer')
print(my_tuple[1])

# my_tuple[4] = 'cap' # does not work, tuples are fixed

# if-statements
my_num1 = 12
my_num2 = 7

if my_num1 == 5:
  print('Your number is 5')
elif my_num1 == 12:
    print('You like 12')

if []:
  print('success')
  #in Python, an empty list returns false, in JS it returns true

if my_num1 < 4:
  print('success 2!')
else:
  print('fail the number 2')

if my_num1 < 4:
  print('success 12!')
elif my_num2 < 10 and my_num2 > 1:
  print('success on 7!')
else:
  print('fail')


# loops
fav_movie_snacks = ['popcorn', 'hotdog', 'pickle', 'nachos']

print(fav_movie_snacks)

for snack in fav_movie_snacks:
  print(f'I like {snack}')

# functions
def print_the_thing(value):
  message_to_user = 'I am the message ' + value
  print(message_to_user)

print_the_thing('of something!')

# working with external files
student_grades = open('grades.csv')

print(student_grades)

for line in student_grades:
  print(type(line))
  print(line)

student_grades.close()

student_grades = open('grades.csv')

a_total = 0
b_total = 0
c_total = 0

for line in student_grades:

  line = line.strip('\n').split(',')

  print(line)

  for value in line:
    if value == 'A':
      a_total += 1
    elif value == 'B':
      b_total += 1
    elif value == 'C':
      c_total += 1

print('As: ', a_total)
print('Bs: ', b_total)
print('Cs: ', c_total)

### EOD RECAP
print('### EOD RECAP###')
import math

def get_middle(word_str):
  word_length = len(word_str)
  print(word_length)

  if word_length == 1 or word_length == 2:
    return word_str
  else:
    if word_length % 2 == 0:
      return word_str[(word_length / 2) - 1] + word_str[word_length / 2]
    else: 
        return word_str[math.ceil(word_length / 2) - 1]


print(get_middle('e')) # -> 'e'
print(get_middle('aa')) # -> 'e'
print(get_middle('toy')) # -> 'o'
print(get_middle('schools')) # -> 'ho'







