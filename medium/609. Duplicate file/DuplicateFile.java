import java.util.*;

public class DuplicateFile {
    public static List<List<String>> findDuplicate(String[] paths) {
        HashMap<String, List<String>> dupFiles = new HashMap<>();

        for (String path : paths) {
            String[] pathData = path.split(" ");

            String dirName = pathData[0];
            for (int i = 1; i < pathData.length; i++) {
                String[] fileDetails = pathData[i].split("\\(");
                String fileName = fileDetails[0];
                String content = fileDetails[1];

                if (dupFiles.containsKey(content)) {
                    dupFiles.get(content).add(dirName + "/" + fileName);
                } else {
                    dupFiles.put(content, new ArrayList<String>() {
                        {
                            add(dirName + "/" + fileName);
                        }
                    });
                }
            }

        }

        List<List<String>> result = new ArrayList<>();
        dupFiles.forEach((k, v) -> {
            if (v.size() > 1) {
                result.add(v);
            }
        });

        return result;
    }

    public static void main(String[] args) {
        System.out.println(findDuplicate(new String[] { "root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)",
                "root/c/d 4.txt(efgh)", "root 4.txt(efgh)" }));
    }

}
