from typing import List


def mincostToHireWorkers(quality: List[int], wage: List[int], k: int) -> float:
    best_value = None

    for cap in range(len(quality)):
        cap_ratio = wage[cap] / quality[cap]

        others = []

        for idx in range(len(quality)):
            if idx == cap:
                continue
            val = cap_ratio * quality[idx]

            print(val, others)
            if val < wage[idx]:
                continue

            if len(others) < k - 1:
                others.append(val)
            elif val < max(others):
                others.remove(max(others))
                others.append(val)

        if len(others) < k - 1:
            continue

        total = sum([*others, wage[cap]])
        best_value = total if best_value is None else min(total, best_value)

    return best_value


print(mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2))
