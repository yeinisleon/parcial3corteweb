using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace ultimoParcial.Models
{
    public class Docente
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("tipo")]
        public string TipoId { get; set; }

        [JsonProperty("nombre")]
        public string Nombre { get; set; }
        [JsonProperty("profesion")]
        public string Profesion { get; set; }

        [JsonProperty("IdInstituciones")]
        public int IdInstitucion { get; set; }

        [JsonProperty("institucion")]
        public Institucion Institucion { get; set; }


    }
}