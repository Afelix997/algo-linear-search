array_to_search_through = []
for number in range(1, 1001):
    array_to_search_through.append(number)

def linear_search(value_to_find, array_to_search_through):
    index= -1
    if value_to_find in array_to_search_through:
        for i in array_to_search_through:
            index += 1
            if i == value_to_find:
                return index
    else: return None

def global_linear_search(value_to_find, array_to_search_through):
    result= []
    index= -1
    if value_to_find in array_to_search_through:
        for i in array_to_search_through:
            index += 1
            if i == value_to_find:
                result.append(index)
        return result
    else: return None


