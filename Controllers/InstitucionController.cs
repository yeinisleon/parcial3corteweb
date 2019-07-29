using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ultimoParcial.Models;

namespace ultimoParcial.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InstitucionController : ControllerBase
    {
        private readonly DbInstitucionContext _dbinstitucioncontext;
        public InstitucionController(DbInstitucionContext dbinstitucioncontext)
        {
            _dbinstitucioncontext = dbinstitucioncontext;

            if (_dbinstitucioncontext.Instituciones.Count() == 0)
            {
                _dbinstitucioncontext.Instituciones.Add(new Institucion { Nombre = "IE NACIONAL LOPERENA", Plaza = 3 });
                _dbinstitucioncontext.Instituciones.Add(new Institucion {  Nombre = "PRUDENCIA DAZA", Plaza = 5 });
                _dbinstitucioncontext.Instituciones.Add(new Institucion {  Nombre = "SAN JOAQUIN", Plaza = 1 });
                _dbinstitucioncontext.Instituciones.Add(new Institucion {  Nombre = "LEONIDAS ACUÑA", Plaza = 4 });
                _dbinstitucioncontext.SaveChanges();
            }
        }

         
        [HttpGet("{id}/Docente")]
        public async Task<ActionResult<Docente>> GetDocente(int id)
        {
            var docen = await _dbinstitucioncontext.Docentes.FindAsync(id);

            if (docen == null)
            {
                return NotFound();
            }
            return docen;
        }


         [HttpGet("{id}/Institucion")]
        public async Task<ActionResult<Docente>> GetInstitucion(int id)
        {
            var insti = await _dbinstitucioncontext.Docentes.FindAsync(id);

            if (insti  == null)
            {
                return NotFound();
            }
            return insti ;
        }
 
          [HttpGet]
        public async Task<ActionResult<IEnumerable<Docente>>> GetDocentes()
        {
            return await _dbinstitucioncontext.Docentes.Include(d=>d.Institucion).ToListAsync();
        }
       
        
        [HttpPost]
        public async Task<ActionResult<Docente>> PostDocentes(Docente nuevoDocente)
        {
            var  xxxxx =  await  _dbinstitucioncontext.Docentes.FindAsync(nuevoDocente.Id);
            var institucion = await  _dbinstitucioncontext.Instituciones.FindAsync(nuevoDocente.IdInstitucion);
            if(xxxxx!=null){
               return BadRequest();
            }
            else{
                if(institucion==null){
                    return BadRequest();
                }
                else{
                    if(institucion.Plaza==0){
                        return BadRequest();
                    }
                    else{                         
                         nuevoDocente.Institucion=institucion;     
                         institucion.Plaza--;                  
                          _dbinstitucioncontext.Docentes.Add(nuevoDocente);
                          await _dbinstitucioncontext.SaveChangesAsync();
                         
                          return CreatedAtAction(nameof(GetDocentes), new { id = nuevoDocente.Id }, nuevoDocente);
                    }

                }
            }
          
        }
    }
}