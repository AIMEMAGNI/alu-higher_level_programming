#!/usr/bin/python3
""" A class to list items """


class MyList(list):
    """ A class to list items """

    def print_sorted(self):
        """ A function that prints sorted list items"""
        temp_list = self[:]
        print(sorted(temp_list))
