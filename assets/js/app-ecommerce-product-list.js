"use strict";$((function(){let t,e,a;isDarkStyle?(t=config.colors_dark.borderColor,e=config.colors_dark.bodyBg,a=config.colors_dark.headingColor):(t=config.colors.borderColor,e=config.colors.bodyBg,a=config.colors.headingColor);var s=$(".datatables-products"),n=baseUrl+"app/ecommerce/product/add",o={1:{title:"Scheduled",class:"bg-label-warning"},2:{title:"Publish",class:"bg-label-success"},3:{title:"Inactive",class:"bg-label-danger"}},r={0:{title:"Household"},1:{title:"Office"},2:{title:"Electronics"},3:{title:"Shoes"},4:{title:"Accessories"},5:{title:"Game"}},i={0:{title:"Out_of_Stock"},1:{title:"In_Stock"}},c={0:{title:"Out of Stock"},1:{title:"In Stock"}};if(s.length){var l=s.DataTable({ajax:assetsPath+"json/ecommerce-product-list.json",columns:[{data:"id"},{data:"id"},{data:"product_name"},{data:"category"},{data:"stock"},{data:"sku"},{data:"price"},{data:"quantity"},{data:"status"},{data:""}],columnDefs:[{className:"control",searchable:!1,orderable:!1,responsivePriority:2,targets:0,render:function(t,e,a,s){return""}},{targets:1,orderable:!1,checkboxes:{selectAllRender:'<input type="checkbox" class="form-check-input">'},render:function(){return'<input type="checkbox" class="dt-checkboxes form-check-input" >'},searchable:!1},{targets:2,responsivePriority:1,render:function(t,e,a,s){var n=a.product_name,o=a.id,r=a.product_brand,i=a.image;if(i)var c='<img src="'+assetsPath+"img/ecommerce-images/"+i+'" alt="Product-'+o+'" class="rounded-2">';else{var l=["success","danger","warning","info","dark","primary","secondary"][Math.floor(6*Math.random())],d=(n=a.product_brand).match(/\b\w/g)||[];c='<span class="avatar-initial rounded-2 bg-label-'+l+'">'+(d=((d.shift()||"")+(d.pop()||"")).toUpperCase())+"</span>"}return'<div class="d-flex justify-content-start align-items-center product-name"><div class="avatar-wrapper"><div class="avatar avatar me-2 rounded-2 bg-label-secondary">'+c+'</div></div><div class="d-flex flex-column"><h6 class="text-body text-nowrap mb-0">'+n+'</h6><small class="text-muted text-truncate d-none d-sm-block">'+r+"</small></div></div>"}},{targets:3,responsivePriority:5,render:function(t,e,a,s){var n=r[a.category].title;return"<span class='text-truncate d-flex align-items-center'>"+{Household:'<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-warning me-2"><i class="bx bx-home-alt"></i></span>',Office:'<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-success me-2"><i class="bx bx-briefcase"></i></span>',Electronics:'<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-primary me-2"><i class="bx bx-mobile-alt"></i></span>',Shoes:'<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-info me-2"><i class="bx bx-walk"></i></span>',Accessories:'<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-secondary me-2"><i class="bx bxs-watch"></i></span>',Game:'<span class="avatar-sm rounded-circle d-flex justify-content-center align-items-center bg-label-dark me-2"><i class="bx bx-game"></i></span>'}[n]+n+"</span>"}},{targets:4,orderable:!1,responsivePriority:3,render:function(t,e,a,s){var n=a.stock;return"<span class='text-truncate'>"+{Out_of_Stock:'<label class="switch switch-primary switch-sm"><input type="checkbox" class="switch-input" id="switch"><span class="switch-toggle-slider"><span class="switch-off"></span></span></label>',In_Stock:'<label class="switch switch-primary switch-sm"><input type="checkbox" class="switch-input" checked=""><span class="switch-toggle-slider"><span class="switch-on"></span></span></label>'}[i[n].title]+'<span class="d-none">'+i[n].title+"</span></span>"}},{targets:5,render:function(t,e,a,s){return"<span>"+a.sku+"</span>"}},{targets:6,render:function(t,e,a,s){return"<span>"+a.price+"</span>"}},{targets:7,responsivePriority:4,render:function(t,e,a,s){return"<span>"+a.qty+"</span>"}},{targets:-2,render:function(t,e,a,s){var n=a.status;return'<span class="badge '+o[n].class+'" text-capitalized>'+o[n].title+"</span>"}},{targets:-1,title:"Actions",searchable:!1,orderable:!1,render:function(t,e,a,s){return'<div class="d-inline-block text-nowrap"><button class="btn btn-sm btn-icon"><i class="bx bx-edit"></i></button><button class="btn btn-sm btn-icon dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded me-2"></i></button><div class="dropdown-menu dropdown-menu-end m-0"><a href="javascript:0;" class="dropdown-item">View</a><a href="javascript:0;" class="dropdown-item">Suspend</a></div></div>'}}],order:[2,"asc"],dom:'<"card-header d-flex border-top rounded-0 flex-wrap py-md-0"<"me-5 ms-n2 pe-5"f><"d-flex justify-content-start justify-content-md-end align-items-baseline"<"dt-action-buttons d-flex align-items-start align-items-md-center justify-content-sm-center mb-3 mb-sm-0"lB>>>t<"row mx-2"<"col-sm-12 col-md-6"i><"col-sm-12 col-md-6"p>>',lengthMenu:[7,10,20,50,70,100],language:{sLengthMenu:"_MENU_",search:"",searchPlaceholder:"Search Product",info:"Displaying _START_ to _END_ of _TOTAL_ entries"},buttons:[{extend:"collection",className:"btn btn-label-secondary dropdown-toggle me-3",text:'<i class="bx bx-export me-1"></i>Export',buttons:[{extend:"print",text:'<i class="bx bx-printer me-2" ></i>Print',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5,6,7],format:{body:function(t,e,a){if(t.length<=0)return t;var s=$.parseHTML(t),n="";return $.each(s,(function(t,e){void 0!==e.classList&&e.classList.contains("product-name")?n+=e.lastChild.firstChild.textContent:void 0===e.innerText?n+=e.textContent:n+=e.innerText})),n}}},customize:function(s){$(s.document.body).css("color",a).css("border-color",t).css("background-color",e),$(s.document.body).find("table").addClass("compact").css("color","inherit").css("border-color","inherit").css("background-color","inherit")}},{extend:"csv",text:'<i class="bx bx-file me-2" ></i>Csv',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5,6,7],format:{body:function(t,e,a){if(t.length<=0)return t;var s=$.parseHTML(t),n="";return $.each(s,(function(t,e){void 0!==e.classList&&e.classList.contains("product-name")?n+=e.lastChild.firstChild.textContent:void 0===e.innerText?n+=e.textContent:n+=e.innerText})),n}}}},{extend:"excel",text:'<i class="bx bxs-file-export me-2"></i>Excel',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5,6,7],format:{body:function(t,e,a){if(t.length<=0)return t;var s=$.parseHTML(t),n="";return $.each(s,(function(t,e){void 0!==e.classList&&e.classList.contains("product-name")?n+=e.lastChild.firstChild.textContent:void 0===e.innerText?n+=e.textContent:n+=e.innerText})),n}}}},{extend:"pdf",text:'<i class="bx bxs-file-pdf me-2"></i>Pdf',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5,6,7],format:{body:function(t,e,a){if(t.length<=0)return t;var s=$.parseHTML(t),n="";return $.each(s,(function(t,e){void 0!==e.classList&&e.classList.contains("product-name")?n+=e.lastChild.firstChild.textContent:void 0===e.innerText?n+=e.textContent:n+=e.innerText})),n}}}},{extend:"copy",text:'<i class="bx bx-copy me-2" ></i>Copy',className:"dropdown-item",exportOptions:{columns:[1,2,3,4,5,6,7],format:{body:function(t,e,a){if(t.length<=0)return t;var s=$.parseHTML(t),n="";return $.each(s,(function(t,e){void 0!==e.classList&&e.classList.contains("product-name")?n+=e.lastChild.firstChild.textContent:void 0===e.innerText?n+=e.textContent:n+=e.innerText})),n}}}}]},{text:'<i class="bx bx-plus me-0 me-sm-1"></i><span class="d-none d-sm-inline-block">Add Product</span>',className:"add-new btn btn-primary",action:function(){window.location.href=n}}],responsive:{details:{display:$.fn.dataTable.Responsive.display.modal({header:function(t){return"Details of "+t.data().product_name}}),type:"column",renderer:function(t,e,a){var s=$.map(a,(function(t,e){return""!==t.title?'<tr data-dt-row="'+t.rowIndex+'" data-dt-column="'+t.columnIndex+'"><td>'+t.title+":</td> <td>"+t.data+"</td></tr>":""})).join("");return!!s&&$('<table class="table"/><tbody />').append(s)}}},initComplete:function(){this.api().columns(-2).every((function(){var t=this,e=$('<select id="ProductStatus" class="form-select text-capitalize"><option value="">Status</option></select>').appendTo(".product_status").on("change",(function(){var e=$.fn.dataTable.util.escapeRegex($(this).val());t.search(e?"^"+e+"$":"",!0,!1).draw()}));t.data().unique().sort().each((function(t,a){e.append('<option value="'+o[t].title+'">'+o[t].title+"</option>")}))})),this.api().columns(3).every((function(){var t=this,e=$('<select id="ProductCategory" class="form-select text-capitalize"><option value="">Category</option></select>').appendTo(".product_category").on("change",(function(){var e=$.fn.dataTable.util.escapeRegex($(this).val());t.search(e?"^"+e+"$":"",!0,!1).draw()}));t.data().unique().sort().each((function(t,a){e.append('<option value="'+r[t].title+'">'+r[t].title+"</option>")}))})),this.api().columns(4).every((function(){var t=this,e=$('<select id="ProductStock" class="form-select text-capitalize"><option value=""> Stock </option></select>').appendTo(".product_stock").on("change",(function(){var e=$.fn.dataTable.util.escapeRegex($(this).val());t.search(e?"^"+e+"$":"",!0,!1).draw()}));t.data().unique().sort().each((function(t,a){e.append('<option value="'+i[t].title+'">'+c[t].title+"</option>")}))}))}});$(".dataTables_length").addClass("mt-0 mt-md-3 me-3"),$(".dt-buttons > .btn-group > button").removeClass("btn-secondary"),$(".dt-buttons").addClass("d-flex flex-wrap")}$(".datatables-products tbody").on("click",".delete-record",(function(){l.row($(this).parents("tr")).remove().draw()})),setTimeout((()=>{$(".dataTables_filter .form-control").removeClass("form-control-sm"),$(".dataTables_length .form-select").removeClass("form-select-sm")}),300)}));
