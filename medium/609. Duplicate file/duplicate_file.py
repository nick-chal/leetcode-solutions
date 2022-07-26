from typing import List


def find_duplicate(paths: List[str]) -> List[List[str]]:
    dup_group = {}
    for path in paths:
        dir_name, *files = path.split()

        for file in files:
            file_name = file.split("(")[0]
            content = file[len(file_name) + 1 : -1]

            if content not in dup_group:
                dup_group[content] = []
            dup_group[content].append(f"{dir_name}/{file_name}")

    return [value for value in dup_group.values() if len(value) > 1]


print(
    find_duplicate(
        [
            "root/a 1.txt(abcd) 2.txt(efgh)",
            "root/c 3.txt(abcd)",
            "root/c/d 4.txt(efgh)",
            "root 4.txt(efgh)",
        ]
    )
)
