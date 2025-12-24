package gdoc.lambdaexpressions;

/*
    Lambda Expression: Problem Set (Google Doc)
    1. Filename sorter with policy tiers
    a. You’ve a list of file names, for example: [“README.md”, “Main.java”,
        “notes.txt”, “index.md”, “build.gradle”, “App.java”, “todo.md”]
    b. Sort them using a single lambda-based Comparator with this policy:
        - Priority by extension: .md first, then .java, then everything else
        - Within the same extension, shorter names first
        - If still tied, reverse alphabetical
*/

public class FilenameSorter {

    public static void main(String[] args) {

//        List<String> filenames = new ArrayList<>(List.of("README.md", "Main.java",
//                "notes.txt", "index.md", "build.gradle", "App.java", "todo.md"));

        //        Comparator<String> byExtension = (a, b) -> {
        //            String.compare(a.matches("abc"), b.matches("sbc"));
        //            Boolean.compare(a.endsWith(".md"), b.endsWith(".java"));

    }

//        filenames.sort(byExtension);

    //        filenames.sort(byExtension);
//        System.out.println(filenames);
    //        for (String i : filenames) {
    //            System.out.println(i);
    //        }

//}


}
