print "RPJE Builder V1"

inputFiles = []

configFile = open("Build_Config.txt","r")
buildFile = open("RPJE_Release.js","w")

for line in configFile:
	if "include:" in line:
		useless, path = line.split(":")
		path = path.replace("\n", "")
		path = path.replace("\r", "")
		inputFiles.append(path)


configFile.close()

for path in inputFiles:
	print "[INFO] Including : " + path + "..."

	tmpFile = open(path, "r")

	buildFile.write("\n//[GENERATED] : INCLUDE : " + path + "\n")

	for line in tmpFile:
		buildFile.write(line);

	tmpFile.close()



buildFile.close()