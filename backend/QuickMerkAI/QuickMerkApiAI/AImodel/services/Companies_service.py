from AImodel.repositories.Companies_repository import Companies_repository

class Companies_service:
    def __init__(self):
        self.repository = Companies_repository()

    def Get_Companies(self, request):
        return self.repository.get_categories()