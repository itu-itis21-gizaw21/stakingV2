import os

# Directory to search files within (current directory)
directory = '.'

# Output file to write the lines that contain the specific text
output_filename = 'output_lines.txt'

# Open the output file in write mode
with open(output_filename, 'w') as output_file:
    # Loop through each file in the specified directory
    for filename in os.listdir(directory):
        # Construct the full file path
        filepath = os.path.join(directory, filename)
        # Make sure it's a file and not a directory
        if os.path.isfile(filepath):
            # Open the file for reading
            try:
                with open(filepath, 'r') as file:
                    # Read the file line by line
                    for line in file:
                        # Check if the target string is in the current line
                        if 'chainSymbolImageUrl' in line:
                            # Write the line to the output file
                            output_file.write(line)
            except Exception as e:
                print(f"Failed to read {filename}: {e}")

print("Processing complete.")
