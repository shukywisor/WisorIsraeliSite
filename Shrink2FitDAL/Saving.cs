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
    
    public partial class Saving
    {
        public int ID { get; set; }
        public int OrderID { get; set; }
        public int AmountSaved { get; set; }
        public int SavingsType { get; set; }
        public decimal Yield { get; set; }
        public Nullable<bool> Liquidity { get; set; }
    
        public virtual SavingsType SavingsType1 { get; set; }
        public virtual Order Order { get; set; }
    }
}
