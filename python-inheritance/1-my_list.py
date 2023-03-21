#!/usr/bin/python3
""" A class to list items """


class MyList(list):
    """ A class to list items """

    def print_sorted(self):
        """ A function that prints sorted list items"""

        print(sorted(list))


def main():
    my_list = MyList()
    my_list.append(1)
    my_list.append(4)
    my_list.append(2)
    my_list.append(3)
    my_list.append(5)
    print(my_list)
    my_list.print_sorted()
    print(my_list)


main()
