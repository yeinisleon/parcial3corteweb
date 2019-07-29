using Microsoft.EntityFrameworkCore;

namespace ultimoParcial.Models
{
public class DbInstitucionContext : DbContext
{
public DbInstitucionContext(DbContextOptions<DbInstitucionContext> options) :
base(options)
{
}
public DbSet<Institucion> Instituciones { get; set; }
public DbSet<Docente> Docentes { get; set; }
}   
}