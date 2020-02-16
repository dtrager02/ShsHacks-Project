import csv
import json
import sys

if len(sys.argv) == 3 and sys.argv[2] != 'intermediate_json.txt' and sys.argv[1][-4:] == '.csv' and sys.argv[2][-4:] == '.txt':
    csvfilename = sys.argv[1]
    jsonfilename = 'intermediate_json.txt'

    csvfile = open(csvfilename, 'r')
    jsonfile = open(jsonfilename, 'w')

    # PART I: Read .csv file into json file
    reader = csv.DictReader(csvfile)
    for row in reader:
        json.dump(row, jsonfile)
        jsonfile.write('\n')

    csvfile.close()
    jsonfile.close()

    # PART II: Modify the json file for select object elements
    list_of_dictionaries = []
    finaljsonfilename = sys.argv[2]

    with open(jsonfilename, 'r') as jsonfile:
        for line in jsonfile:
            if line != '':
                json_dict = json.loads(line)
                # Age, Muscle Groups, Equipment
                json_dict['Age'] = tuple(map(int, json_dict['Age'].split('-')))
                json_dict['Muscle Groups'] = json_dict['Muscle Groups'].split(';')
                # json_dict['Equipment'] = json_dict['Equipment'].split(';')

                list_of_dictionaries.append(json_dict)

    # Turn dictionary back into json
    with open(finaljsonfilename, 'w') as newjsonfile:
        for dictionary in list_of_dictionaries:
            newjsonfile.write(json.dumps(dictionary) + "\\n")

    # PART III: Print the json file contents for verification
    with open(finaljsonfilename, 'r') as jsonfile:
        for line in jsonfile:
            print(line)
else:
    print('Sorry, something went wrong.')


# end program