import java.util.Scanner;

public class inicioPAM {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("-------------------------------------");
        System.out.println("1 Reglamento");
        System.out.println("2 Evidencias del parcial");
        System.out.println("3 las fechas");
        System.out.println("4 Porcentajes");
        System.out.print("--------------------------------------- ");

        int opcion = sc.nextInt();

        switch (opcion) {
            case 1:
                System.out.println(
                "1.Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase." +
                "2.Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia. " +
                "3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor, " +
                "justificantes entregados fuera de la fecha límite permitido no se aceptan, únicamente se aceptarán recetas médicas y citatorios jurídicos al " +
                "tutor para ser validados y de forma posterior emitidos. " +
                "4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea. " +
                "5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se aceptan. " +
                "6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom. " +
                "7. El plagio o copia de trabajos y/o exámenes será condicionado a reprobar la asignatura y se reportará al área correspondiente. " +
                "8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final. " +
                "9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes, administrativos, compañeros o cualquier persona perteneciente a la universidad, se realizará " +
                "una primera llamada de atención, si el alumno hace caso omiso tendrá que abandonar el aula. Tres incidencias de este tipo el alumno no tendrá derecho a examen final o parcial. " +
                "10. Uso de laptops y/o dispositivos móviles quedará limitado a uso exclusivo de las actividades que así lo requieran. " +
                "11. Prohibido el uso de audífonos durante la clase. " +
                "12. Prohibido comer y/o tomar líquidos en el salón. " +
                "13. Prohibido sentarse encima de las mesas, así como columpiarse en las sillas. " +
                "14.Todo tema académico debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación " +
                "de tutores. En caso de no solucionarse pasar a la dirección del programa educativo. " +
                "15.Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo. " +
                "16. El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese día se entregarán exámenes y se brindará retroalimentación. " +
                "17.Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia, una vez firmado o aceptado por el " +
                "50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión."
                );
                break;

            case 2:
                System.out.println(
                "evidencia de conocimiento " +
                "evidencia de desempeno " +
                "evidencia de producto " +
                "proyecto integrador"
                );

            break;

            case 3:
                System.out.println(
                "1er Parcial: 30-09-25 " +
                "2do Parcial: 04-10-25 " +
                "3er Parcial: 02-12-25 " +
                "Final: 08-12-25"
                );
            break;

            case 4:
                System.out.println(
                " |     | 1P  | 2P  | 3P  |" +
                " |-----|-----|-----|-----|" +
                " |     | 40% | 40% | 20% |" +
                " |     | 20% | 20% | 10% |" +
                " |     | 20% | 20% | 10% |" +
                " |     | 30% | 20% | 40% |" +
                " |     | 10% | 20% | 30% |"
                );

                break;

            default:
                System.out.println("error");
        }

        sc.close();
    }
}