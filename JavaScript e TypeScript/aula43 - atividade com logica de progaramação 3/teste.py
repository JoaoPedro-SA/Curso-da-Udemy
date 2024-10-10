
def fizzbuzz(num):
    """
    Aplica as regras do FizzBuzz ao número fornecido.

    Args:
      num: O número a ser verificado.

    Returns:
      O número original se não for divisível por 3 ou 5, "Fizz" se for divisível por 3,
      "Buzz" se for divisível por 5, e "FizzBuzz" se for divisível por ambos.
    """

    if isinstance(num, str):  # Verifica se é uma string
        return num
    elif num % 3 == 0 and num % 5 == 0:
        return "FizzBuzz"
    elif num % 3 == 0:
        return "Fizz"
    elif num % 5 == 0:
        return "Buzz"
    else:
        return num

for i in range(1, 101):
    print(fizzbuzz(i))
