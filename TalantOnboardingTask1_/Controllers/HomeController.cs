using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TalantOnboardingTask1_.Models;
using Newtonsoft.Json;

namespace TalantOnboardingTask1_.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult CustomerList()
        {
            CRUDEntities db = new CRUDEntities();
            var customerList = db.Customers.Select(x => new
            {
                Id = x.Id,
                Name = x.Name,
                Address = x.Address
            }).ToList();
            return Json(customerList, JsonRequestBehavior.AllowGet);
            //return new JsonResult { Data = customerList, JsonRequestBehavior = JsonRequestBehavior.AllowGet };

        }
        public JsonResult AddCustomer(Customer c)
        {
            CRUDEntities db = new CRUDEntities();
            db.Customers.Add(c);
            db.SaveChanges();

            return new JsonResult { Data = "success", JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public JsonResult DeleteCustomer(int id)
        {
            CRUDEntities db = new CRUDEntities();
            var customer = db.Customers.Where(x => x.Id == id).SingleOrDefault();
            if (customer != null)
            {
                db.Customers.Remove(customer);
                db.SaveChanges();
            }

            return new JsonResult { Data = "success", JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public JsonResult GetEditCustomer(int id)
        {
            CRUDEntities db = new CRUDEntities();
            var customer = db.Customers.Where(x => x.Id == id).SingleOrDefault();
            string value = JsonConvert.SerializeObject(customer, Formatting.Indented, new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore
            });
            return Json(value, JsonRequestBehavior.AllowGet);




            //  return new JsonResult { Data = customer, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }
        public JsonResult EditCustomer(Customer c)
        {
            CRUDEntities db = new CRUDEntities();
            var customer = db.Customers.Where(x => x.Id == c.Id).SingleOrDefault();
            customer.Name = c.Name;
            customer.Address = c.Address;
            db.SaveChanges();
            return new JsonResult { Data = "Success", JsonRequestBehavior = JsonRequestBehavior.AllowGet };

        }




        public JsonResult ProductList()
        {
            CRUDEntities db = new CRUDEntities();
            var ProductList = db.Products.Select(x => new
            {
                Id = x.Id,
                Name = x.Name,
                Price = x.Price
            }).ToList();
            return Json(ProductList, JsonRequestBehavior.AllowGet);
            //return new JsonResult { Data = customerList, JsonRequestBehavior = JsonRequestBehavior.AllowGet };

        }
        public JsonResult SaleList()
        {
            CRUDEntities db = new CRUDEntities();
            var SaleList = db.Sales.Select(x => new
            {
                Id = x.Id,

                Date = x.DateSold

            }).ToList();
            return Json(SaleList, JsonRequestBehavior.AllowGet);
            //return new JsonResult { Data = customerList, JsonRequestBehavior = JsonRequestBehavior.AllowGet };

        }
        public JsonResult StoreList()
        {
            CRUDEntities db = new CRUDEntities();
            var StoreList = db.Stores.Select(x => new
            {
                Id = x.Id,
                Name = x.Name,
                Address = x.Address
            }).ToList();
            return Json(StoreList, JsonRequestBehavior.AllowGet);
            //return new JsonResult { Data = customerList, JsonRequestBehavior = JsonRequestBehavior.AllowGet };

        }
    }
}