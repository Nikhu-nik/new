import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
 
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule)
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'all-category',
    loadChildren: () => import('./all-category/all-category.module').then(m => m.AllCategoryPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfilePageModule)
  },

  {
    path: 'add-product',
    loadChildren: () => import('./add-product/add-product.module').then(m => m.AddProductPageModule)
  },
  
  {
    path: 'product-list',
    loadChildren: () => import('./product-list/product-list.module').then(m => m.ProductListPageModule)
  },
  {
    path: 'admindashboard',
    loadChildren: () => import('./admindashboard/admindashboard.module').then(m => m.AdmindashboardPageModule)
  },
  {
    path: 'reseller',
    loadChildren: () => import('./reseller/reseller.module').then(m => m.ResellerPageModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('./chart/chart.module').then(m => m.ChartPageModule)
  },
  {
    path: 'chart2',
    loadChildren: () => import('./chart2/chart2.module').then(m => m.Chart2PageModule)
  },
  {
    path: 'recharge/:id',
    loadChildren: () => import('./recharge/recharge.module').then(m => m.RechargePageModule)
  },
  {
    path: 'property-list',
    loadChildren: () => import('./property-list/property-list.module').then(m => m.PropertyListPageModule)
  },
  {
    path: 'product-detail/:id',
    loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
  },

  {
    path: 'democart2',
    loadChildren: () => import('./democart2/democart2.module').then(m => m.Democart2PageModule)
  },

  {
    path: 'testo/:service',
    loadChildren: () => import('./testo/testo.module').then(m => m.TestoPageModule)
  },
  
  {
    path: 'editproduct/:id',
    loadChildren: () => import('./editproduct/editproduct.module').then( m => m.EditproductPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'ordersummary',
    loadChildren: () => import('./ordersummary/ordersummary.module').then( m => m.OrdersummaryPageModule)
  },
  {
    path: 'adminorders',
    loadChildren: () => import('./adminorders/adminorders.module').then( m => m.AdminordersPageModule)
  },
  {
    path: 'editprofile',
    loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
  },
  {
    path: 'whishlist',
    loadChildren: () => import('./whishlist/whishlist.module').then( m => m.WhishlistPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
