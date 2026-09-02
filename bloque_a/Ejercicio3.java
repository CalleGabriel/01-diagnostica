import java.util.Scanner;

public class Ejercicio3 {
    public static void main(String[] args) {
        // TODO: Leer la edad con Scanner
        Scanner Scanner = new Scanner(System.in);
        System.out.println("Introduce tu edad: ");
        int edad = Scanner.nextInt();
        // TODO: Evaluar con if / else si es mayor o menor de edad
        if (edad >= 18)
            System.out.println("Eres mayor de edad.");
        else
            System.out.println("Eres menor de edad. ");
    }
}
