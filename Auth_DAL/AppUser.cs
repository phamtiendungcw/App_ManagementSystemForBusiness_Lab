﻿using System.ComponentModel.DataAnnotations;

namespace Auth_DAL
{
    public class AppUser
    {
        [Key]
        public int Id { get; set; }
        public string UserName { get; set; }
    }
}