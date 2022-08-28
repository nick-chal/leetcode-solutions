from typing import List

def nextGreatestLetter(letters: List[str], target: str) -> str:
    for char in letters:
        if char >target:
            return char
    
    return letters[0]

print(nextGreatestLetter(["c","f","j"], "c"))
print(nextGreatestLetter(["c","f","j"], "a"))
print(nextGreatestLetter(["c","f","j"], "d"))