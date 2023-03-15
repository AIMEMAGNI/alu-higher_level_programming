#!/usr/bin/python3
"""Define a class Square."""


class Square:
    """Represent a square."""

    def __init__(self, size=0):
        """Initialize a new Square.

        Args:
            size (int): The size of the new square.
        """
        try:
        self.__size = size

        except TypeError:
            print("size must be an integer")

        except ValueError:
            print("size must be >= 0")
