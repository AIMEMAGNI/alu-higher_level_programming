#!/usr/bin/python3
''' Checking if the object belongs to a class'''


def is_same_class(obj, a_class):
    ''' Checking if the object belongs to a class'''
    return issubclass(obj, a_class)
