package Estrutura_condicional;

public class OperadoresLogicas {

	public static void main(String[] argsg) throws Exception {
		boolean num = true;
		boolean num2 = false;
		boolean num3 = true;
		System.out.println((num & num2) != num3);
		System.out.println((num | num2) != num3);
		System.out.println(!(num | num2) != num3);
		
	}
}
