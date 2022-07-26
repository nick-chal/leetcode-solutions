def max_product(nums):
    result = max(nums)
    local_max = 1
    local_min = 1

    for num in nums:
        if num == 0:
            local_max = 1
            local_min = 1
            continue

        tmp_max = local_max

        local_max = max(num * local_max, num * local_min, num)
        local_min = min(num * tmp_max, num * local_min, num)

        result = max(local_max, result)

    return result


print(max_product([2, 3, -2, 4]))
