using System.ComponentModel.DataAnnotations.Schema;
using Newtonsoft.Json;

namespace ultimoParcial.Models
{   
    public class Institucion{


    [JsonProperty("Id")]
     public int Id { get; set; }  
     
    [JsonProperty("nombreie")]
    public string Nombre { get; set; }
    [JsonProperty("Plaza")]
    public int Plaza { get; set; } 

    }
}