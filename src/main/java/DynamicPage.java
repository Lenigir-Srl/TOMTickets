import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.IOException;
import java.io.PrintWriter;

public class DynamicPage {
	public void printPage(PrintWriter out, String file_path){
		String line;
		InputStream inputStream = getClass().getResourceAsStream(file_path); //Used to get the inputstream of the input file;
		if(inputStream != null){ //Check if file exists 
			try{
				BufferedReader br = new BufferedReader(new InputStreamReader(inputStream)); //Creating the bufferReader
				while((line = br.readLine()) != null){ //Reading the file, line by line, until EOF is reached
					out.println(line);
				}
			}catch (IOException e){ //If bufferReader fails to read the file print an error
				out.println("File " + file_path + " failed to read!");
				e.printStackTrace();
			}
		}else{ //If input file does not exist print an error
			out.println("File " + file_path + " was not found!");
		}
	}
	
}
