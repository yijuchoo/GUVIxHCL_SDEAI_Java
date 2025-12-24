package foundations.activites.fileioconcurrency;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.LinkedList;

public class PersistToDo {
    /*
    Lecture 10: File I/O & Concurrency

    Activity: persist a todo list

    Clean and persist a todo.txt into a data folder
        - Input may contain duplicates, blanks, and leading or trailing spaces
        - The data folder may not exist yet; create it before writing
    Enforce output invariants that make the file dependable
        - Trim whitespace, drop empty lines, preserve first seen order
        - Remove exact duplicates after trimming, do not append
    Use the APIs introduced so far
        - Read with readString if present, write back with writeString
        - Ensure folders exist using createDirectories before any write
    Make the operation idempotent across runs
        - Running the program twice produces identical file content
    Update todo.txt with the cleaned up version
    */
    public static void main(String[] args) throws IOException {
        Path file = Path.of("data","todo.txt");
        String fileContents = Files.readString(file);
//        System.out.println(fileContents);

        LinkedList<String> output = new LinkedList<>();
        // Processing
        for (String line:fileContents.split("\\R")) {
            String str = line.trim();
            // !str.isEmpty() -> checks that str is NOT empty
            // !output.contains(str) -> checks (for duplicates) that the str is not
            // already contained in output
            if (!str.isEmpty() && !output.contains(str)) {
                output.add(str);
            }
        }

        // Write to the todo.txt
        String updatedFileContents = String.join(System.lineSeparator(),output);
        Files.writeString(file, updatedFileContents);
    }

}
