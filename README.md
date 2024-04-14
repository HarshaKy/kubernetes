# kubernetes
learning kubernetes

### Pod
> Smallest object in Kubernetes. Has one or more containers. (Best practice is to have 1 per pod)
```
# Create pod
kubectl create -f pod.yaml
```
```
# Update pod with changes in yaml
kubectl apply -f pod.yaml
```
```
# Delete pod
kubectl delete pod <name>
```

### Replica Set
> Pods wrapped inside Replica Set.
```
# Create Replica Set
kubectl create -f replicaset.yaml
```
```
# Delete Replica Set
kubectl delete replicaset <name>
```

### Deployment
> Replica Set wrapped inside Deployment.
```
# Create deployment
kubectl create -f deployment.yaml
```
```
# Delete deployment
kubectl delete deploy <name>
```

### Multi-container Setup
> Uses
1. Health checks
2. Proxy container


### Network structure
> Each pod gets its own virtual network interface. 
> wifi -> virtualbox vm / minikube -> kubernetes virtual interface cr0 -> each pod's own virtual interface

```
# connect to a container with container name
kubectl exec -it <pod_name> -c <container_name> -- <command>
```

### Logs
```
# Get logs for a container
kubectl logs <pod_name> -c <container_name>
```

### Init Containers
1. Container that runs before any app containers start in a pod.
2. Used to setup the env for apps or to perform pre-config tasks.
3. If init container fails, Kubernetes restarts the pod until it succeeds.
