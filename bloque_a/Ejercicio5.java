public class Ejercicio5 {

    // TODO: Define la función estática calcularPromedio(double a, double b)
    public static double calcularPromedio(double a, double b) {
        return (a + b) / 2;
    }

    public static void main(String[] args) {
        // TODO: Prueba la función calcularPromedio
        double promedio = calcularPromedio(8.5, 9.5);
        System.out.println("Promedio calculado: " + promedio);

        // TODO: Instancia la clase Estudiante y llama a su método mostrarFicha()
        Estudiante alumno = new Estudiante("Milton Mogrovejo", 18, 9.2);
        alumno.mostrarFicha();
    }
}

// TODO: Crea aquí la clase Estudiante con sus atributos, constructor y métodos
class Estudiante {
    String nombre;
    int edad;
    double notaFinal;

    public Estudiante(String nombre, int edad, double notaFinal) {
        this.nombre = nombre;
        this.edad = edad;
        this.notaFinal = notaFinal;
    }

    public void mostrarFicha() {
        System.out.println("--- FICHA DEL ESTUDIANTE ---");
        System.out.println("Nombre: " + this.nombre);
        System.out.println("Edad: " + this.edad + " años");
        System.out.println("Nota Final: " + this.notaFinal);
    }
}