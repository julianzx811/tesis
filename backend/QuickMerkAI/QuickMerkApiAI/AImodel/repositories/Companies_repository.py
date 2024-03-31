from AImodel.models import Empresa, Tienda
from django.forms.models import model_to_dict

class Companies_repository:
    def get_categories(self):
        Tiendaquery = Tienda.objects.all()
        Empresaquery = Empresa.objects.all()
        empresa = []
        Tiendas = []
        for empresita in Empresaquery:
            empresactual=model_to_dict(empresita)
            empresa.append(empresactual)
        print(empresa)
        for tiendita in Tiendaquery:
            tiendaactual=model_to_dict(tiendita)
            empresainfo = Empresa(
                Empresa_Nombre=empresa[tiendaactual["empresaId"]-1]["Empresa_Nombre"],
                link=empresa[tiendaactual["empresaId"]-1]["link"],
            )
            empresainfo = model_to_dict(empresainfo)
            tiendaactual.update(empresainfo)
            print(tiendaactual)
            Tiendas.append(tiendaactual)
        return Tiendas