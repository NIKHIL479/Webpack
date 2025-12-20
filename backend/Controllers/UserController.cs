using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using OhioHealthProject.Data;
using OhioHealthProject.Models;
namespace OhioHealthProject.Controllers
{
        [ApiController]
        [Route("api/[controller]")]
        public class UserController : ControllerBase
        {
            private readonly AppDbContext _context;

            public UserController(AppDbContext context)
            {
                _context = context;
            }

            [HttpPost]
            public async Task<IActionResult> SaveUser([FromBody] User user)
            {
                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return Ok(user);
            }

            [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _context.Users.ToListAsync();
            return Ok(users); // <-- this returns JSON data
        }
    }
    }


