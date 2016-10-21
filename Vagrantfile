Vagrant.configure(2) do |config|
  config.vm.box = "hashicorp/precise64"
  config.vm.hostname ="NodeEx"
  config.vm.provision "shell", path: "provision.sh" 

  config.vm.network "forwarded_port",guest:1337,host:8080,id: "express"
end
