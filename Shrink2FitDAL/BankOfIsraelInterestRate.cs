//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Shrink2FitDAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class BankOfIsraelInterestRate
    {
        public int Year { get; set; }
        public int Month { get; set; }
        public decimal Value { get; set; }
        public int BOIIndexType { get; set; }
    
        public virtual BankOfIsraelInterestType BankOfIsraelInterestType { get; set; }
    }
}
