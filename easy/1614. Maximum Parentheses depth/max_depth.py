def max_depth(s: str) -> int:
    curr_depth = 0
    max_depth = 0

    for char in s:
        if char == "(":
            curr_depth += 1
        elif char == ")" and curr_depth > 0:
            curr_depth -= 1

        max_depth = max(curr_depth, max_depth)

    return max_depth


print(max_depth("(1+(2*3)+((8)/4))+1"))
